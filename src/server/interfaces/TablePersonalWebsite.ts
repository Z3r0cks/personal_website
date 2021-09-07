interface RowDataPacket {
   ID: number;
   DEV_NAME: string;
   SETTINGS: string;
}

export default interface TablePersonalWebsite extends Array<RowDataPacket> {
   ID: number;
   DEV_NAME: string;
   SETTINGS: string;
}