import Layout from '@/components/layout/layout';
import ProjectCard from '@/components/layout/projectCard';
import Section from '@/components/layout/section';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ProjectData {
  type: string;
  title: string;
  detail: string;
  img: string;
}

const projectList: ProjectData[] = [
  {
    type: 'web',
    title: 'TEDxITS',
    detail:
      'TEDx is a global community initiative aimed at discovering and sharing innovative ideas through local events organized by passionate individuals, which include live speakers and recorded TED Talks.',
    img: 'images/project-1.png',
  },
];

const Index = () => {
  const router = useRouter();
  const filterTypes = ['all', 'web', 'mobile'];
  const [selectedFilter, setSelectedFilter] = React.useState<string>('all');
  const [filteredData, setFilteredData] =
    React.useState<ProjectData[]>(projectList);

  React.useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredData(projectList);
    } else {
      const filtered = projectList.filter(
        (data) => data.type === selectedFilter
      );
      setFilteredData(filtered);
    }
  }, [selectedFilter]);

  return (
    <Layout>
      <h1 className='text-center font-secondary text-3xl font-bold'>
        Project Overview
      </h1>
      <div className='flex items-center justify-center space-x-4 py-5'>
        {filterTypes.map((type) => (
          <button
            key={type}
            className={`${
              selectedFilter === type
                ? 'relative after:absolute after:bottom-0 after:left-0  after:h-[2px] after:w-full after:rounded after:bg-accent after:duration-300'
                : ''
            } text-secondary text-lg font-semibold focus:outline-none`}
            onClick={() => setSelectedFilter(type)}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
      <div className='mx-auto grid grid-cols-2 gap-10 py-5 max-md:flex max-md:flex-col max-md:items-center '>
        {filteredData.map((item) => {
          return (
            <div
              key={item.title}
              // onClick={() => router.push(`/project/${item.title}`)}
            >
              <ProjectCard
                title={item.title}
                img={item.img}
                detail={item.detail}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;