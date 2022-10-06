import { IStorage } from './interface/IStorage';

export class Storage implements IStorage {
  constructor(private storage: any) {}

  async get(key: string): Promise<string | null> {
    return await this.storage.getItem(key);
  }

  async set(key: string, value: string): Promise<void> {
    await this.storage.setItem(key, value);
  }

  async remove(key: string): Promise<void> {
    await this.storage.removeItem(key);
  }
}
