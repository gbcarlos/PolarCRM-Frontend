import { Injectable } from '@angular/core';
import { MemberData, MemberDataDetail, ApplicantDataDetail } from './interfaces';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  domain = "http://localhost:8000/members/";
  memberCountUrl = this.domain + "count";
  previewAllMembersUrl = this.domain + "preview/all";
  previewCurrentMembersUrl = this.domain + "preview/current";
  detailOneMemberUrl = this.domain + "detail/";
  createNewMemberUrl = this.domain + "new";
  updateMemberUrl = this.domain + "update/";
  addNewRoleUrl = this.domain + "add-new-role/";

  constructor(private http: HttpClient){}

  getNumberOfMembers(): Observable<number> {
    return this.http.get<number>(this.memberCountUrl);
  }

  getMembers(archived: boolean): Observable<MemberData[]> {
    if(archived) {
      return this.http.get<MemberData[]>(this.previewAllMembersUrl);
    }else {
      return this.http.get<MemberData[]>(this.previewCurrentMembersUrl);
    }
  }

  getMemberDetails(_id: number): Observable<MemberDataDetail> {
    return this.http.get<MemberDataDetail>(
      this.detailOneMemberUrl + _id.toString(), 
      { headers: {'Access-Control-Allow-Origin': '*'}}
    );
  }

  createNewMember(member: ApplicantDataDetail): Observable<string>{
    return this.http.post<string>(this.createNewMemberUrl, member);
  }

  updateMember(member: MemberDataDetail): Observable<MemberDataDetail> {
    return this.http.put<MemberDataDetail>(this.updateMemberUrl, member, { headers: {'Access-Control-Allow-Origin': '*'}});
  }

  addNewRole(member: MemberDataDetail): Observable<MemberDataDetail> {
    return this.http.put<MemberDataDetail>(this.addNewRoleUrl, member, { headers: {'Access-Control-Allow-Origin': '*'}});
  }
}
