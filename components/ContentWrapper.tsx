function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex-grow min-[1700px]:w-full w-11/12 mx-auto py-4'>
      {children}
    </div>
  );
}

export default ContentWrapper;
