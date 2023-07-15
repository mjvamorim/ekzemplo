import faker from 'faker'
export const event = ()=>{
    return {
        id: faker.random.uuid(),
        name: faker.lorem.words(4),
        date: faker.date.future(),
        email: faker.email()
    }
}
export const user = ()=>{
    return {
        id: faker.random.uuid(),
        username: faker.internet.userName(),
        password: 'pw',
    }
}