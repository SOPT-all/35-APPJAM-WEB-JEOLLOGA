import PageBtn from '@components/common/Button/pageBtn/pageBtn';

const App = () => {
  return (
    <div>
      <PageBtn pageNum={1} currentPageNum={2} />
      <PageBtn pageNum={2} currentPageNum={2} />
    </div>
  );
};

export default App;
