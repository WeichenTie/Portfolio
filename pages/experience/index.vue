<template>
  <div class="mx-auto min-h-screen max-w-[calc(45ch*2)] px-16 py-36">
    <div class="grid grid-cols-[1fr,0.5fr] gap-8 lg:flex">
      <div>
        <h1 class="text-6xl font-black">
          Weichen Tie
          <div class="font-['arial, sans-serif'] text-4xl text-rose-600">
            /weɪ ʧɛn taɪ/
          </div>
        </h1>
        <p class="mt-4 leading-snug">
          Hi I'm Weichen, a software developer and mechatronic engineer based in
          Sydney. My passion for technology and problem-solving led me to pursue
          these fields, where I have gained hands-on experience with programming
          languages, software development, and robotics.
          <br /><br />
          As a student, I have taken on various projects and challenges, both
          independently and as part of a team, that have helped me develop my
          technical skills and creative thinking. I am excited about the endless
          possibilities these fields offer, and I look forward to contributing
          my knowledge and expertise to the tech industry.
        </p>
      </div>
      <div class="my-auto aspect-[3/4] overflow-hidden rounded-3xl lg:hidden">
        <NuxtImg
          :width="600"
          :height="800"
          format="webp"
          fit="cover"
          src="/images/experience/portrait.webp"
          placeholder
          class="h-full w-full scale-150 object-cover"
        />
      </div>
    </div>

    <h2 class="border-woodsmoke-800 mt-8 w-full border-b-2 text-3xl font-black">
      Education
    </h2>
    <ol class="ml-12 mt-4">
      <li>
        <span class="flex justify-between font-normal">
          <p>B.Eng Mechatronics Engineering / B.Sci Computer Science</p>
          <p>2020-2025</p>
        </span>
        <p class="italic">University of NSW | Current WAM: 79.318</p>
      </li>
      <li>
        <span class="flex justify-between font-normal">
          <p>Year 12 High School</p>
          <p>2014-2019</p>
        </span>
        <p class="italic">Caringbah High School | ATAR: 96.75</p>
      </li>
    </ol>
    <h2 class="border-woodsmoke-800 mt-8 border-b-2 text-3xl font-black">
      Skills
    </h2>
    <div class="ml-12 mt-4">
      <p>
        <span class="font-normal">Programming Languages:</span>
        HTML, CSS, Typescript, Javascript, Sass, Python, Java, C, C++, C#, GLSL,
        HLSL
      </p>
      <p>
        <span class="font-normal">API's and Libraries:</span> NextJS, NuxtJS,
        SvelteKit, React, Vue, Svelte, Tailwind, OpenGL, Django, .Net, Flask,
        Postgres SQL
      </p>
      <p>
        <span class="font-normal">Software and Hardware:</span> Github, Jira,
        NPM, Visual Studio Code, Unreal Engine, Unity Engine, Raspberry Pi,
        Ardiuno, 3D Printing, Fusion360
      </p>
      <p>
        <span class="font-normal">Social:</span> Mandarin, Communication,
        Leadership, Problem Solving
      </p>
    </div>
    <h2 class="border-woodsmoke-800 mt-8 border-b-2 text-3xl font-black">
      Work Experience
    </h2>
    <div class="ml-12">
      <div>
        <p class="mt-4 font-normal">Feb 2022 - Present</p>
        <p class="italic">No Gaps Dental - Receptionist</p>
      </div>
      <ul class="ml-12 mt-2 list-disc">
        <li>Accurately collect payment from customers using HICAPS machine.</li>
        <li>Booking in patients both in person and via phone calls.</li>
        <li>
          Provides excellent customer service by talking to customers after
          treatment to improve satisfaction.
        </li>
        <li>
          Frequently communicates with dentists and manager to provide the best
          course of actions for the customer.
        </li>
        <li>
          Helped with installing and debugging various products such as printers
          and created macros to improve convenience for all reception team
          members.
        </li>
      </ul>
      <div>
        <p class="mt-4 font-normal">Jan 2017 - Nov 2017</p>
        <p class="italic">KFC - Food Service Team Member</p>
      </div>
      <ul class="ml-12 mt-2 list-disc">
        <li>
          Prepared food in a fast-paced industry whilst following strict heath
          guidelines.
        </li>
        <li>Works efficiently and accurately under stress.</li>
        <li>
          Communicates and coordinates with other team members to deliver
          products punctually during peak hours.
        </li>
        <li>
          Excellent time management for balancing between preparing food and
          sanitation.
        </li>
        <li>Proactively helps other team members when ahead of schedule.</li>
      </ul>
    </div>
    <h2 class="border-woodsmoke-800 mt-8 border-b-2 text-3xl font-black">
      Awards and Acknowledgements
    </h2>
    <ul class="ml-12 mt-4 list-disc">
      <li>
        <span class="font-normal">UNSW</span> - COMP3421 Top 10 Game Awards
      </li>
      <li>
        <span class="font-normal"> Caringbah High School</span> - Yr 12 Perfect
        Attendance
      </li>
      <li>
        <span class="font-normal"> Caringbah High School</span> - Yr 12
        Outstanding Effort Mathematics Extension 1
      </li>
      <li>
        <span class="font-normal"> Caringbah High School</span> - Yr 12
        Outstanding Effort Physics
      </li>
      <li>
        <span class="font-normal"> Caringbah High School</span> - Yr 12
        Outstanding Effort Chemistry
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Experience",
});
</script>