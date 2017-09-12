// datasource for enterprise row model
interface IEnterpriseDatasource {

    // just one method, to get the rows
    getRows(params: IEnterpriseGetRowsParams): void;
}
