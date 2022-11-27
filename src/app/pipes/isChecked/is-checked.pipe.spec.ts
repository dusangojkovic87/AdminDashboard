import { IsCheckedPipe } from './is-checked.pipe';

describe('IsCheckedPipe', () => {
  it('create an instance', () => {
    const pipe = new IsCheckedPipe();
    expect(pipe).toBeTruthy();
  });
});
