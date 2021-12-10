import {createContext} from "react"

export const {
    Provider: GenresProvider, 
    Consumer: GenresConsumer
} = createContext()

export const {
    Provider: TabProvider,
    Consumer: TabConsumer
} = createContext()

export const {
    Provider: RatingProvider,
    Consumer: RatingConsumer
} = createContext()