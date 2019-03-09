interface Socket<T> {
	Open(): void;
	Ping(): void;
	Send(data: T): void;
	Close(error: boolean): void;
	On(event: string, func: Function): RBXScriptConnection;
	On(event: "open", func: () => void): RBXScriptConnection;
	On(event: "close", func: (data: boolean) => void): RBXScriptConnection;
	On(event: "message", func: (data: T) => void): RBXScriptConnection;
}

interface SocketCreator {
	new<T>(uri?: string, path?: string): Socket<T>;
}

declare const Socket: SocketCreator;

export = Socket