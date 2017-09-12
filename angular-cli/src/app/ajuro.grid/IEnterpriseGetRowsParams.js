interface IEnterpriseGetRowsParams {

      // details for the request
      request: IEnterpriseGetRowsRequest;

      // success callback, pass the rows back the grid asked for.
      // if the total row count is known, provide it via lastRow, so the
      // grid can adjust the scrollbar accordingly.
      successCallback(rowsThisPage: any[], lastRow: number): void;

      // fail callback, tell the grid the call failed so it can adjust its state
      failCallback(): void;
  }
