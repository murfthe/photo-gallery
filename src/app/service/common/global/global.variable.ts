import {HttpHeaders} from '@angular/common/http';

const contextPath = '/api/service';

export const GlobalVariable = {
  isHomePage: true,
  contextPath: {contextPath},
  getRequestPath: (path) => {
    return contextPath + path;
  },
  getHttpHeader: () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
};
