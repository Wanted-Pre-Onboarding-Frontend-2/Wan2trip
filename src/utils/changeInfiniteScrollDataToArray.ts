// TODO: 제네릭을 이용해 any말고 다른 type 지정
const changeInfiniteScrollDataToArray = (pageList: any) => {
  const array: any = [];

  pageList?.pages.forEach((page: any) => {
    array.push(...page.result);
  });

  return array;
};

export { changeInfiniteScrollDataToArray };
