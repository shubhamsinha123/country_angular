import { CaseInsensitiveFilterPipe } from './case-insensitive-filter.pipe';

describe('CaseInsensitiveFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CaseInsensitiveFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
