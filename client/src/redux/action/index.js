import {CRUD_READ_ALL} from "../action-types/index"
import {CRUD_READ} from "../action-types/index"
import {CRUD_CREATE} from "../action-types/index"
import {CRUD_UPDATE} from "../action-types/index"
import {CRUD_INSERT} from "../action-types/index"

export function crud_read_all(payload) {
    return {type: CRUD_READ_ALL, payload}
}
export function crud_read(payload) {
    return {type: CRUD_READ, payload}
}
export function crud_create(payload) {
    return {type: CRUD_CREATE, payload}
}
export function crud_update(payload) {
    return {type: CRUD_UPDATE, payload}
}
export function crud_insert(payload) {
    return {type: CRUD_INSERT, payload}
}
