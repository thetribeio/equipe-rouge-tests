import { init } from './left_adapters/server'
import * as provider from './right_adapters/persistence/mogodb/mongodb_provider'
// import * as provider from './right_adapters/persistence/postgres/postgres_provider'

console.info('-------------------------------------')
console.info('-------------------------------------')
console.info('---------- start application --------')
console.info('-------------------------------------')
console.info('-------------------------------------')

init(provider)

console.info('-------------------------------------')
console.info('-------------------------------------')
console.info('-------- application started --------')
console.info('-------------------------------------')
console.info('-------------------------------------')
