import { Observable } from 'rxjs';
import { UserData } from '../../entities/ports/user-data';

export abstract class UserRepository {
    abstract signUp(UserData: UserData): Observable<UserData>
    abstract signIn(email: string, password: string): Observable<UserData>
    // abstract findAllUsers(): Observable<UserData[]>
    abstract getUserById(id: number): Observable<UserData>
    // abstract findUserByEmail(email: string): Observable<UserData>
    // abstract exists(email: string): Observable<boolean>
}