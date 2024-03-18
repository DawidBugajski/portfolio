function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className='text-2xl font-bold text-center py-4'>{children}</h1>
      <hr className='dark:border-white w-14 mx-auto' />
    </>
  );
}

export default PageTitle;
