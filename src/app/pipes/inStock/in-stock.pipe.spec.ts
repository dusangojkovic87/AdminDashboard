import { InStockPipe } from './in-stock.pipe';

describe('InStockPipe', () => {
  it('create an instance', () => {
    const pipe = new InStockPipe();
    expect(pipe).toBeTruthy();
  });
});
