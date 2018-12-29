function paginationHelper(currentPage, pageSize, recordTotal) {
  let pageTotal = Math.ceil(recordTotal/pageSize);
  let offset =  pageSize * (currentPage - 1)
  return{
    status: '1',
    currentPage: currentPage,
    pageTotal: pageTotal,
    pageSize: pageSize,
    recordsTotal: recordTotal,
    offset: offset,
    limit: pageSize
  }
}


const res = paginationHelper(4, 10, 92)

console.log(res)
