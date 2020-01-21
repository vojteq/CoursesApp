import { Course } from './models/Course';
import { TypeOfClasses } from './models/TypeOfClasses'

export const COURSES: Course[] = [
    new Course( 'Fizyka I', 6, 2, 'Ćwiczenia', 22, 25, 2, 9, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'wprowadzenie w swiat fizyki' ),
    new Course( 'Fizyka II', 6, 3, 'Labolatoria', 8, 10, 3, 12, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'dlugie doswiadczenia i jeszcze dluzsze sprawozdania' ),
    new Course( 'Wstęp do Informatyki', 6, 1, 'Ćwiczenia', 25, 30, 2, 6, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/213px-ISO_C%2B%2B_Logo.svg.png', 'Wprowadzenie w świat programowania' ),
    new Course( 'Algorytmy i struktury danych', 6, 2, 'Ćwiczenia', 100, 220, 4, 18, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'zaskakujace i nieprzewidywalne zadania -> tylko tutaj' ),
    new Course( 'Logika matematyczna', 4, 2, 'Wykład', 200,  200, 10, 12, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'Wykład z podstaw logiki matematycznej' ),
    new Course( "Elektronika", 4, 2, 'Labolatoria', 12, 15, 1, 100, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'Nie wiadomo po co ani dlaczego' ),
    new Course( 'Programowanie Obiektowe', 3, 3, 'Wykład', 165, 170, 21, 86, 'https://media4.s-nbcnews.com/j/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.fit-2000w.jpg', 'wykład z programowania obiektówego, ciekawie prowadzony' )
]