import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Selection, Edit, Sort, Filter, Page, Toolbar } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true
        }}
        width="auto"
        >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers;


// import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Filter, Page, Sort, Toolbar, Inject } from '@syncfusion/ej2-react-grids'

// import { customersData, customersGrid } from '../data/dummy';
// import { Header } from '../components';

// const Customers = () => {
  // const selectionsettings = { persistSelection: true };
  // const toolbarOptions = ['Delete'];
  // const editing = { allowDeleting: true,allowEditing: true };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Customers" />
//       <GridComponent
//         dataSource={customersData}
//         // enableHover={false}
//         allowPaging
//         allowSorting
//         // pageSettings={{ pageCount: 5 }}
//         // selectionSettings={selectionsettings}
//         toolbar={['Delete']}
//         editSettings={{
//           allowDeleting: true,
//           allowEditing: true
//         }}
//       >
//         <ColumnsDirective>
//           {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
//       </GridComponent>
//     </div>
//   )
// }

// export default Customers;