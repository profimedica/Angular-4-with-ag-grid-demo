interface IEnterpriseGetRowsRequest {

      // details for the request
      rowGroupCols: ColumnVO[];

      // columns that have aggregations on them
      valueCols: ColumnVO[];

      // what groups the user is viewing
      groupKeys: string[];

      // if filtering, what the filter model is
      filterModel: any;

      // if sorting, what the sort model is
      sortModel: any;
  }

  // we pass a VO (Value Object) of the column and not the column itself,
  // so the data can be converted to a JSON string and passed to server side
  export interface ColumnVO {
      id: string;
      displayName: string;
      field: string;
      aggFunc: string;
  }
