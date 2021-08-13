import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teacher: [],
  student: [],
};

export const newSlice = createSlice({
  name: 'newMember',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.teacher.push(action.payload);
    },
    deleteTeacher: (state, action) => {
      return {
        teacher: state.teacher.filter((e) => e.id !== action.payload.id),
        student: [...state.student],
      };
    },
    addStudent: (state, action) => {
      state.student.push(action.payload);
    },
    deleteStudent: (state, action) => {
      return {
        teacher: [...state.teacher],
        student: state.student.filter((e) => e.id !== action.payload.id),
      };
    },
  },
});

export const { addTeacher, deleteTeacher, addStudent, deleteStudent } =
  newSlice.actions;

export const teacher = (state) => state.newMember.teacher;
export const student = (state) => state.newMember.student;

export default newSlice.reducer;
