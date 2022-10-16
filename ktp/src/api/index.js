import requests from './ajax'

export const login = (data) => requests({url: 'login', params: data, method: 'post'})

export const register = (data) => requests({url: 'register', params: data, method: 'post'});

export const getCourse = (data) => requests({url: 'getCourse', params:data, method: 'post'});

export const deleteCourse = (data) => requests({url: 'delete', params:data, method: 'post'});

export const deleteAll = (data) => requests({url: 'deleteAll', params:data, method: 'post'});

export const archiveAll = (data) => requests({url: 'archiveAll', params:data, method: 'post'});

export const restore = (data) => requests({url: 'restore', params:data, method: 'post'});

export const archive = (data) => requests({url: 'archive', params: data, method: 'post'});

export const getClassPeople = (data) => requests({url: 'queryClassPeople', params: data, method: 'post'});

export const joinCourse = (data) => requests({url: 'joinCourse', params: data, method: 'post'});

export const createCourse = (data) => requests({url: 'createCourse', params: data, method: 'post'});

export const getScore = (data) => requests({url: 'getScore', params: data, method: 'post'});

export const submit = (data) => requests({url: 'submit', params: data, method: 'post'});

export const getSelfHomework = (data) => requests({url: 'getSelfHomework', params: data, method: 'post'});

export const publicHomework = (data) => requests({url: 'public', params: data, method: 'post'});

export const getHomework = (data) => requests({url: 'getHomework', params: data, method: 'post'});

export const getSubmitHomework = (data) => requests({url: 'getSubmitHomework', params: data, method: 'post'});

export const queryNameById = (data) => requests({url: 'queryNameById', params: data, method: 'post'});





