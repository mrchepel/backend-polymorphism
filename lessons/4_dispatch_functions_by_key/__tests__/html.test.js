import stringify from '../html';

describe('stringify', () => {
  it('test 1', () => {
    const tag = {
      name: 'hr',
      class: 'px-3',
      id: 'myid',
      tagType: 'single',
    };
    const html = stringify(tag);

    const expected = '<hr class="px-3" id="myid">';
    expect(html).toBe(expected);
  });

  it('test 2', () => {
    const tag = {
      name: 'p',
      tagType: 'pair',
      body: 'text',
    };
    const html = stringify(tag);

    const expected = '<p>text</p>';
    expect(html).toBe(expected);
  });

  it('test 3', () => {
    const tag = {
      name: 'div',
      tagType: 'pair',
      body: 'text2',
      id: 'wow',
    };
    const html = stringify(tag);

    const expected = '<div id="wow">text2</div>';
    expect(html).toBe(expected);
  });
});
