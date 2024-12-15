import Team from '../team'; 

test('добавление персонажа', () => {
  const team = new Team();
  const character = { name: 'Warrior', level: 1 };

  team.add(character);
  expect(Array.from(team.members)).toContain(character);
});

test('добавление одного и того же персонажа вызывает ошибку', () => {
  const team = new Team();
  const character = { name: 'Warrior', level: 1 };

  team.add(character);
  
  expect(() => {
    team.add(character);
  }).toThrow('Персонаж уже добавлен в команду');
});

test('добавление нескольких персонажей', () => {
  const team = new Team();
  const character1 = { name: 'Warrior', level: 1 };
  const character2 = { name: 'Mage', level: 1 };

  team.addAll(character1, character2);
  expect(Array.from(team.members)).toEqual(expect.arrayContaining([character1, character2]));
});

test('метод toArray возвращает массив', () => {
  const team = new Team();
  const character = { name: 'Warrior', level: 1 };
  
  team.add(character);
  expect(team.toArray()).toEqual(expect.arrayContaining([character]));
});