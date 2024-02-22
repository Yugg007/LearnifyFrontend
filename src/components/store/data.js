// const dummyData = [
//     {
//       id: 1,
//       name: 'Introduction to React',
//       image: 'https://picsum.photos/id/1018/800/600', // Replace with a real image URL
//       description: 'Learn the basics of React programming.',
//       rating: 4.5,
//       comments: 15,
//       buttonText: 'Enroll Now',
//     },
//     {
//       id: 2,
//       name: 'Node.js Fundamentals',
//       image: 'https://picsum.photos/id/1015/800/600', // Replace with a real image URL
//       description: 'Explore the fundamentals of Node.js development.',
//       rating: 4.0,
//       comments: 12,
//       buttonText: 'Enroll Now',
//     },
//     {
//       id: 3,
//       name: 'JavaScript for Beginners',
//       image: 'https://picsum.photos/id/1005/800/600', // Replace with a real image URL
//       description: 'A beginner-friendly guide to JavaScript programming.',
//       rating: 4.8,
//       comments: 18,
//       buttonText: 'Enroll Now',
//     },
//     {
//       id: 4,
//       name: 'Web Development Bootcamp',
//       image: 'https://picsum.photos/id/1003/800/600', // Replace with a real image URL
//       description: 'Join a comprehensive bootcamp covering web development.',
//       rating: 4.2,
//       comments: 20,
//       buttonText: 'Enroll Now',
//     },
//     {
//       id: 5,
//       name: 'Data Science Essentials',
//       image: 'https://picsum.photos/id/1012/800/600', // Replace with a real image URL
//       description: 'Get started with the essentials of data science.',
//       rating: 4.6,
//       comments: 14,
//       buttonText: 'Enroll Now',
//     },
//   ];

//   export default dummyData;


const trendingCourses = [
  {
    id: 1,
    name: 'Introduction to React',
    image: 'https://picsum.photos/id/1018/800/600',
    description: 'Learn the basics of React programming.',
    rating: 4.5,
    comments: 15,
    buttonText: 'Enroll Now',
  },
  {
    id: 2,
    name: 'Node.js Fundamentals',
    image: 'https://picsum.photos/id/1015/800/600',
    description: 'Explore the fundamentals of Node.js development.',
    rating: 4.0,
    comments: 12,
    buttonText: 'Enroll Now',
  },
  {
    id: 3,
    name: 'JavaScript for Beginners',
    image: 'https://picsum.photos/id/1005/800/600',
    description: 'A beginner-friendly guide to JavaScript programming.',
    rating: 4.8,
    comments: 18,
    buttonText: 'Enroll Now',
  },
];

const relevantCourses = [
  {
    id:
      4,
    name: 'Web Development Bootcamp',
    image: 'https://picsum.photos/id/1003/800/600',
    description: 'Join a comprehensive bootcamp covering web development.',
    rating: 4.2,
    comments: 20,
    buttonText: 'Enroll Now',
  },
  {
    id: 5,
    name: 'Data Science Essentials',
    image: 'https://picsum.photos/id/1012/800/600',
    description: 'Get started with the essentials of data science.',
    rating: 4.6,
    comments: 14,
    buttonText: 'Enroll Now',
  },
  {
    id: 6,
    name: 'Advanced Frontend Development',
    image: 'https://picsum.photos/id/1006/800/600',
    description: 'Explore advanced concepts in frontend development.',
    rating: 4.4,
    comments: 17,
    buttonText: 'Enroll Now',
  },
];

const dummyData = [...trendingCourses, ...relevantCourses];

export default dummyData;