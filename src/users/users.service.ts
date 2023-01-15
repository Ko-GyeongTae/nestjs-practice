import { EmailService } from './../email/email.service';
import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { UserInfo } from './UserInfo';

@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {}

  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    /**
     * TODO
     * DB에서 signupVerifyToken으로 회원가입 처리중인 유저가 있는지 조회하고 없다면 에러처리, 바로 로그인 상태가 되도록 jwt 발급
     */
    throw new Error('Method not implemented');
  }

  async login(email: string, password: string): Promise<string> {
    /**
     * TODO
     * email, password를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러처리, jwt 발급
     */
    throw new Error('Method not implemented');
  }

  async getUserInfo(userId: string): Promise<UserInfo> {
    /**
     * TODO
     * userId를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리, 조회된 데이터를 UserInfo 타입으로 응답
     */
    throw new Error('Method not implemented');
  }

  private checkUserExists(email: string) {
    return false;
  }

  private saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    return;
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }
}
