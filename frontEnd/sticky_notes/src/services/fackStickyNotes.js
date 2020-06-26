const notes = [
  {
    userId: 1,
    catogeries: ["os", "algo", "eng", "math"],
    Notes: [
      {
        notesCatagory: "os",
        note_id: 1,
        Notes: ["hey i am divay mohan", "How are you", "i am fine"],
        createdData: Date.now(),
      },
      {
        notesCatagory: "os",
        note_id: 2,
        Notes: ["hey i am divay mohan", "How are you", "i am fine"],
        createdData: Date.now(),
      },
      {
        notesCatagory: "os",
        note_id: 3,
        Notes: ["hey i am divay mohan", "How are you", "i am fine"],
        createdData: Date.now(),
      },
      {
        notesCatagory: "eng",
        note_id: 1,
        Notes: ["hey i am divay mohan", "How are you", "i am fine"],
        createdData: Date.now(),
      },
      {
        notesCatagory: "eng",
        note_id: 2,
        Notes: ["hey i am divay mohan", "How are you", "i am fine"],
        createdData: Date.now(),
      },
      {
        notesCatagory: "eng",
        note_id: 3,
        Notes: ["hey i am divay mohan", "How are you", "i am fine"],
        createdData: Date.now(),
      },
      {
        notesCatagory: "algo",
        note_id: 1,
        Notes: ["hey i am divay mohan", "How are you", "i am fine"],
        createdData: Date.now(),
      },
      {
        notesCatagory: "math",
        note_id: 2,
        Notes: ["hey i am divay mohan", "How are you", "i am fine"],
        createdData: Date.now(),
      },
      {
        notesCatagory: "math",
        note_id: 3,
        Notes: ["hey i am divay mohan", "How are you", "i am fine"],
        createdData: Date.now(),
      },
    ],
  },
];

function getNotes() {
  return notes;
}
export { getNotes };
