interface Course {
    id: number;
    "course-type": string;
    title: string;
    description: string;
    topics: string[];
  }
  

  type ChangeCourseType = (selected: React.ChangeEvent<HTMLSelectElement>)  => void;