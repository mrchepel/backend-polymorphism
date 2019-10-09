import InMemoryKV from '../inMemoryKV';

it('InMemoryKV', () => {
  const map = new InMemoryKV({ key: 10 });

  expect(map.get('key2')).toBeNull();
  expect(map.get('key2', 'default')).toBe('default');
  expect(map.get('key')).toBe(10);
  expect(map.get('key', 'default')).toBe(10);

  map.set('key2', 'value2');
  map.set('key', 'value');

  expect(map.get('key2', 'default')).toBe('value2');
  expect(map.get('key2')).toBe('value2');
  expect(map.get('key')).toBe('value');

  map.unset('key');

  expect(map.get('key')).toBeNull();
  expect(map.toObject()).toEqual({ key2: 'value2' });
});
