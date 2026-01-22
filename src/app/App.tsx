function App() {
  return (
    <div className="bg-blue-500 lg:bg-red-500  flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-4">반응형 테스트</h1>
      <p className="lg:hidden text-xl">지금은 모바일 뷰입니다 (Blue)</p>
      <p className="hidden lg:block text-xl">
        지금은 데스크탑 뷰입니다 (Red, 1024px 이상)
      </p>
    </div>
  );
}

export default App;
