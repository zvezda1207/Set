import ErrorRepository from '../errors'; 

let errorRepo;

beforeEach(() => {
    errorRepo = new ErrorRepository();
    errorRepo.add(404, 'Not found');
    errorRepo.add(500, 'Internal Server Error');
});

test('должно возвращать правильное описание для существующего кода ошибки', () => {
    expect(errorRepo.translate(404)).toBe('Not found');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
});

test("должен возвращать 'Unknown error' для несуществующего кода ошибки", () => {
    expect(errorRepo.translate(123)).toBe('Unknown error');
});

test("должен возвращать 'Unknown error', если коды ошибок не добавлены", () => {
    const emptyRepo = new ErrorRepository();

    expect(emptyRepo.translate(123)).toBe('Unknown error');
});

