import { Injectable } from '@nestjs/common';
import { CreateExampleHttpmoduleDto } from './dto/create-example-httpmodule.dto';
import { UpdateExampleHttpmoduleDto } from './dto/update-example-httpmodule.dto';

import { lastValueFrom, map } from 'rxjs';
import { HttpService } from '@nestjs/axios'; // src\example-httpmodule\example-httpmodule.module.ts

@Injectable()
export class ExampleHttpmoduleService {
  constructor(
    private httpService: HttpService
  ) {
  }

  create(createExampleHttpmoduleDto: CreateExampleHttpmoduleDto) {

    let res_json: any = {}

    res_json.statusCode = 1
    res_json.req_body = createExampleHttpmoduleDto
    res_json.data = [
      {
        data1: "test1",
        data2: "test2",
        data3: "test3",
        data4: "test4",
        data5: "test5"
      },
      {
        data1: "test1",
        data2: "test2",
        data3: "test3",
        data4: "test4",
        data5: "test5"
      },
      {
        data1: "test1",
        data2: "test2",
        data3: "test3",
        data4: "test4",
        data5: "test5"
      },
      {
        data1: "test1",
        data2: "test2",
        data3: "test3",
        data4: "test4",
        data5: "test5"
      }
    ]


    return res_json
  }

  findAll() {
    return `This action returns all exampleHttpmodule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exampleHttpmodule`;
  }

  update(id: number, updateExampleHttpmoduleDto: UpdateExampleHttpmoduleDto) {
    return `This action updates a #${id} exampleHttpmodule`;
  }

  remove(id: number) {
    return `This action removes a #${id} exampleHttpmodule`;
  }



  postRequestHttpModule(req_body: any) {

    // let requestParameter = {
    //   "data": "EKITESTING",
    //   "xxx": "zzz",
    //   "zzz": "xxx"
    // }

    let requestParameter = req_body

    let headersParameter = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

    return this.httpService.post("http://localhost:3000/example-httpmodule", requestParameter, headersParameter).pipe(
      map((response) => response.data),
      map((res: any) => {

        return res;
      }))

  }


  async asyncPostRequestHttpModule(req_body: any) {

    // let requestParameter = {
    //   "data": "EKITESTING",
    //   "xxx": "zzz",
    //   "zzz": "xxx"
    // }

    let requestParameter = req_body

    let headersParameter = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

    // ===================== OLD VERSION (RxJS version under 7.5)

    // let responsePostDeprecated = await this.httpService.post("http://localhost:3000/example-httpmodule", requestParameter, headersParameter).pipe(
    //   map((response) => response.data),
    //   map((res: any) => {

    //     return res;
    //   })).toPromise()
    // ===================== /OLD VERSION (RxJS version under 7.5)

    let responsePost = await lastValueFrom(this.httpService.post("http://localhost:3000/example-httpmodule", requestParameter, headersParameter).pipe(
      map((response) => response.data),
      map((res: any) => {

        return res;
      })))


    if (responsePost) {
      responsePost.addData = [1, 2, 3, 4]
      responsePost.addData2 = [1, 2, 3, 4]
    }
    return responsePost

  } // end if


}
