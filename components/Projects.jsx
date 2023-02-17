import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Stategame from '../public/assets/projects/stategame.jpg';
import Password from '../public/assets/projects/password.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='LOGOS'
            backgroundImg={Stategame}
            projectUrl='https://github.com/Miteshjadav07/LOGOS.git'  
            tech='Photoshop'
          />
          <ProjectItem
            title='POSTERS'
            backgroundImg={Password}
            tech='Photoshop'
            projectUrl='https://github.com/Miteshjadav07/POSTERS.git'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
