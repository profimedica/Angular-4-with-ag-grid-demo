interface IEnterpriseGetRowsParams {
      request: IEnterpriseGetRowsRequest;
      successCallback(rowsThisPage: any[], lastRow: number): void;
      failCallback(): void;
  }
