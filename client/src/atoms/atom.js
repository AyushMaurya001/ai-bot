import { atom, atomFamily, selector, selectorFamily } from "recoil";


export const lightThemeAtom = atom({
    key: "themeAtom",
    default: false
})

export const bgPrimaryColor = selector({
    key: "bgPrimaryColorSelector",
    get: ({get}) => {
        if (get(lightThemeAtom)===true) return "bg-lightPrimaryColor"
        else return "bg-darkPrimaryColor"
    }
})

export const bgSecondaryColor = selector({
    key: "bgSecondaryColor",
    get: ({get}) => {
        if (get(lightThemeAtom)===true) return "bg-lightSecondaryColor"
        else return "bg-darkSecondaryColor"
    }
})

export const focusedChatIdAtom = atom({
    key: "focusedChatIdAtom",
    default: "chatsAtomId1"
})

export const chatsAtom = atom({
    key: "chatsAtom",
    default: [{
        id: "chatsAtomId1",
        title: "New Chat"
    }]
})
// chatsAtom = [{
//     id: "uniqueId",
//     title: "chat title"
// }]
// header section that has id & title

export const chatAtomFamily = atomFamily({
    key: "chatAtomFamily",
    default: id => {
        return [];
    }
    // default: selectorFamily({
    //     key: "chatAtomFamilySelectorFamily",
    //     get: (id) => ({get}) => {
    //         const chat = get(chatsAtom).find(x => x.id===id).chat
    //         return chat;
    //     }
    // })
});
// chat section that contain only chat