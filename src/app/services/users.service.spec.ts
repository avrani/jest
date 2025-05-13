import { UserInteface } from "../types/user.interface";
import { UsersService } from "./users.service";
import { TestBed } from "@angular/core/testing";

describe('UserService', () => {
    let userService: UsersService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsersService],
        });
        userService = TestBed.inject(UsersService);
    })
    it('create a service', () => {
        expect(userService).toBeTruthy()
    })
    describe('addUser', () => {
        it("should add a user", () => {
            const user: UserInteface = {
                id: '1',
                name: 'Ariel'
            }
            userService.addUser(user)
            expect(userService.users).toEqual([{ id: "1", name: 'Ariel' }])
        })
        it("should remove a user", () => {
            userService.users = [{ id: "1", name: 'Ariel' }];
            userService.removeUser("1");
            expect(userService.users).toEqual([])
        })

    })
})