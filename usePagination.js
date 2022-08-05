import Pagination from 'react-bootstrap/Pagination';

function PagiNation() {
    return (
        <Pagination className='pagination'>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            {/* <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Item>{8}</Pagination.Item> */}

            {/* <Pagination.Ellipsis /> */}
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}

export default PagiNation;


// export const usePagination = ({
//     totalCount,
//     pageSize,
//     siblingCount = 1,
//     currentPage
//   }) => {
//     const paginationRange = (() => {
//       const totalPageCount = Math.ceil(totalCount / pageSize);
  
//       // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
//       const totalPageNumbers = siblingCount + 5;
  
//       /*
//         Case 1:
//         If the number of pages is less than the page numbers we want to show in our
//         paginationComponent, we return the range [1..totalPageCount]
//       */
//       if (totalPageNumbers >= totalPageCount) {
//         return range(1, totalPageCount);
//       }
      
//       /*
//           Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
//       */
//       const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
//       const rightSiblingIndex = Math.min(
//         currentPage + siblingCount,
//         totalPageCount
//       );
  
//       /*
//         We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
//       */
//       const shouldShowLeftDots = leftSiblingIndex > 2;
//       const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
  
//       const firstPageIndex = 1;
//       const lastPageIndex = totalPageCount;
  
//       /*
//           Case 2: No left dots to show, but rights dots to be shown
//       */
//       if (!shouldShowLeftDots && shouldShowRightDots) {
//         let leftItemCount = 3 + 2 * siblingCount;
//         let leftRange = range(1, leftItemCount);
  
//         return [...leftRange, DOTS, totalPageCount];
//       }
  
//       /*
//           Case 3: No right dots to show, but left dots to be shown
//       */
//       if (shouldShowLeftDots && !shouldShowRightDots) {
        
//         let rightItemCount = 3 + 2 * siblingCount;
//         let rightRange = range(
//           totalPageCount - rightItemCount + 1,
//           totalPageCount
//         );
//         return [firstPageIndex, DOTS, ...rightRange];
//       }
       
//       /*
//           Case 4: Both left and right dots to be shown
//       */
//       if (shouldShowLeftDots && shouldShowRightDots) {
//         let middleRange = range(leftSiblingIndex, rightSiblingIndex);
//         return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
//       }
//     }, [totalCount, pageSize, siblingCount, currentPage]);
  
//     return paginationRange;
//   };