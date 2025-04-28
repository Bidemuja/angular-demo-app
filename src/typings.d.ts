interface Window {
    electron: {
        sendFileDropped: (filePath: string) => void;
    };
}
