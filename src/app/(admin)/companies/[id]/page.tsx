// in case [...id]

// import React from 'react';
// import Header from '@/app/components/header';

// export interface PageProps {
//   params: { id: string[] };
// }

// export default function Page({ params }: PageProps) {
//   return (
//     <>
//       <Header>Company ({String(params.id)})</Header>
//     </>
//   );
// }
'use client';
import React from 'react';
import Header from '@/app/components/header';
import { useEffect } from 'react';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  // ERROR: Not Found
  // useEffect(() => {
  //   const id = Number.parseInt(params.id);
  //   if (Number.isNaN(id)) {
  //     notFound();
  //   }
  // }, [params.id]);

  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}
