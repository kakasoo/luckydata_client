export const getKoreanTime = (mysqlDateTime: any) => {
  const koreanTime = new Date(mysqlDateTime);
  return (
    koreanTime.getFullYear() +
    ' / ' +
    (koreanTime.getMonth() - 0 + 1) +
    ' / ' +
    koreanTime.getDate()
  );
};
