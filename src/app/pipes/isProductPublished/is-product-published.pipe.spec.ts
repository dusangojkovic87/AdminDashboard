import { IsProductPublishedPipe } from './is-product-published.pipe';

describe('IsProductPublishedPipe', () => {
  it('create an instance', () => {
    const pipe = new IsProductPublishedPipe();
    expect(pipe).toBeTruthy();
  });
});
