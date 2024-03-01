interface InputPort {
  countDatabaseEntries(): Promise<number>;
  registerMessage(id: string, message: string): Promise<void>;
  getMessages(id: string, page: number, pageSize: number): Promise<string[]>;
}

export { InputPort };
