import { useEffect, useLayoutEffect, useRef } from 'react'
import './BackgroundCanvas.css'

interface Node {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;
}


const maxDist = 175;
const numNodes = 50;

const BackgroundCanvas = () =>{
    const canvas = useRef<any>(null);
    const ctx = useRef<CanvasRenderingContext2D>(null);
    
    // Logic stuff
    const dt = useRef(0);
    const lastTime = useRef(Date.now());
    const nodes = useRef<Node[]>([]);

    useEffect(()=>{
        nodes.current = [];
        canvas.current = document.getElementById('landing-bg-canvas');
        console.log(canvas.current);
        ctx.current = canvas.current.getContext('2d');
        canvas.current.width = window.innerWidth;
        canvas.current.height = window.innerHeight;

        setup()
        draw()
    }, [])

    const onResize = ()=>{

    }

    const setup=()=>{
        for (let i = 0; i < numNodes; i++) {
            let node = createNode(); 
            nodes.current.push(node);
        }
    }
    
    const createNode = ():Node => {
        return {
            radius: 4,
            x: Math.random()*window.innerWidth,
            y:Math.random()*window.innerHeight,
            dy: Math.random()* 0.15 - 0.075,
            dx: Math.random() * 0.15 - 0.075, 
        }
    }

    const lerp = (min: number, max: number, v: number) => {
        return (max - min) * v + min;
    }


    const getNodeDist = (node1: Node, node2: Node) => {
        return Math.sqrt((node1.x - node2.x)*(node1.x - node2.x) + (node1.y - node2.y)*(node1.y - node2.y))
    }
    ////////////////////////////////////////////////////////////////////
    // Updating
    
    const checkEdgeBounce = (node : Node) => {
        let height = window.innerHeight;
        let width = window.innerWidth;
        if (node.y >= height - node.radius){
          node.dy = -node.dy
          node.y = height - node.radius
        }
        if (node.x >= width - node.radius){
          // right wall
          node.dx = -node.dx
          node.x = width - node.radius
        }
        if (node.y <= node.radius){
          node.dy = -node.dy
          node.y = node.radius
        }
        if (node.x <= node.radius){
          // left wall
          node.dx = -node.dx
          node.x = node.radius
        }
      }

    const updateNodePosition = (node: Node, dt: number) => {
        node.x += node.dx * dt;
        node.y += node.dy * dt;
    }


    /////////////////////////////////////////////////////////////////// 
    // Drawing
    const drawNode = (node: Node) => {
        ctx.current.fillStyle = 'white'
        ctx.current.beginPath()
        ctx.current.arc(node.x, node.y, node.radius, 0, 2*Math.PI)
        ctx.current.fill();
    }

    const drawConnection = (node1: Node, node2: Node) => {
        const dist = getNodeDist(node1, node2);
        if (dist > maxDist) {return}
        ctx.current.strokeStyle= `rgba(255,255,255, ${2.5*(maxDist-dist) / maxDist})`
        ctx.current.beginPath();
        ctx.current.moveTo(node1.x, node1.y);
        ctx.current.lineTo(node2.x, node2.y);
        ctx.current.stroke();

    }
    const drawConnections = () => {
        let length = nodes.current.length;
        for (let i = 0; i < length; i++) {
            let node1 = nodes.current[i];
            for (let j = i + 1; j < length; j++) {
                let node2 = nodes.current[j];
                drawConnection(node1, node2)
            }
        } 
    }

    const draw = () => {
        ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
        for (let node of nodes.current) {
            checkEdgeBounce(node);
            updateNodePosition(node, dt.current);
            drawNode(node);
        }
        drawConnections();
        dt.current = Date.now() - lastTime.current;
        lastTime.current = Date.now();
        requestAnimationFrame(draw)
    }



    return (
        <canvas id='landing-bg-canvas' width={window.innerWidth} height={window.innerHeight}>
        </canvas>
    )
}

export default BackgroundCanvas;