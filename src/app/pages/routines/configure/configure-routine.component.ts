import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { RoutinesService } from 'src/app/services/routines.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-configure-routine',
  templateUrl: './configure-routine.component.html',
  styleUrls: ['./configure-routine.component.css']
})
export class ConfigureRoutineComponent implements OnInit {

  modalRef: BsModalRef;

  rowIndex: any;
  rowSchedule: any;
  selRoutine: any = -1;
  selDay: any = -1;
  selSession: any = -1;
  selAvRoutine: any = -1;
  selAvDay: any = -1;
  selCategory: any = -1;
  selRoutineCat: any = -1;
  routines: any[] = [];
  days: any[] = [];
  sessions: any[] = [];
  schedules: any[] = [];
  avRoutines: any[];
  avBaseRoutines: any[];
  routineCats: any[];
  categories: any[];

  constructor(private routineService: RoutinesService, 
    private categoryService: CategoryService, 
    private toastr: ToastrService,
    private modalService: BsModalService) { 

    this.getRoutineList();
    this.getDaysList();
    this.getSessionList();
    this.getScheduled();
    this.getAvailableRoutines();
    this.getRoutineCategory();
    this.getCategories();
  }

  ngOnInit() {
  }

  save(frmRoutine: NgForm) {

    var schedule = {
      routine: this.selRoutine,
      day: this.selDay,
      session: this.selSession
    }

    this.routineService.createRoutineSchedule(schedule)
    .subscribe(res => {
      if(res['data'] > 0) {
        this.toastr.success(res['message']);
        this.getScheduled();
      }
      else
      {
        this.toastr.warning(res['message']);
      }
    },
    error => {
      this.toastr.error('No se pudo agendar');
    });
  }

  deleteRoutineSchedule() {
    this.routineService.deleteRoutineSchedule(this.rowSchedule)
    .subscribe(res => {
      if(res['data'] > 0) {
        this.schedules.splice(this.rowIndex, 1);
        this.toastr.success('Sesion eliminada');
      }
      else
      {
        this.toastr.warning(res['message']);
      }
      this.modalRef.hide();
    },
    error => {
      console.log(error)
      this.modalRef.hide();
    });
  }

  openModalConfirm(template: TemplateRef<any>, index, schedule) {
    this.rowIndex = index;
    this.rowSchedule = schedule;

    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  getScheduled() {
    this.routineService.getRoutineSchedule()
    .subscribe((schedules: any[]) => {
      this.schedules = schedules;
    },
    error => {
      console.log(error);
    });
  }

  getAvailableRoutines() {
    this.routineService
    .getRoutineAvailability()
    .subscribe((res: any[]) => {
      this.avRoutines = res;
      this.avBaseRoutines = res;
    }, error => {
      console.log(error);
    })
  }

  getSessionList() {
    this.routineService.getAllSessions()
    .subscribe((sessions: any[]) => {
      this.sessions = sessions;
    },
    error => {
      console.log(error);
    });
  }

  getDaysList() {
    this.routineService.getAvailableDays()
    .subscribe((days: any[]) => {
      this.days = days;
    },
    error => {
      console.log(error);
    });
  }

  getRoutineList() {
    this.routineService.getAllRoutines()
    .subscribe((routines: any[]) => {
      this.routines = routines;
    },
    error => {
      console.log(error);
    });
  }

  deleteAvailableRoutine(index, avRoutine) {
    this.routineService
    .deleteRoutineAvailability(avRoutine)
    .subscribe(res => {
      if(res['data'] > 0) {
        this.avRoutines.splice(index, 1);
        this.toastr.success('Disponibilidad eliminada');
      }
      else
      {
        this.toastr.warning(res['message']);
      }
    }, error => {
      console.log(error);
    });
  }

  saveAvailable() {
    var avRoutine = {
      routine: this.selAvRoutine,
      day: this.selAvDay
    };

    this.routineService.createRoutineAvailability(avRoutine)
    .subscribe(res => {
      if(res['data']) {
        this.toastr.success(res['message']);
        this.getAvailableRoutines();
      } 
      else
      {
        this.toastr.error(res['message']);
      }
    }, error => {
      console.log(error);
    });
  }

  getRoutineCategory() {
    this.routineService.getRoutineCategory()
    .subscribe((res: any[]) => {
      this.routineCats = res;
    }, error => {
      console.log(error);
    })
  }

  deleteRoutineCategory(index, routineCat) {
    console.log(routineCat);
    this.routineService.deleteRoutineCategory(routineCat)
    .subscribe(res => {
      /*
      if(res <= 0) {
        this.toastr.warning('No se pudo realizar la accion');
        return;
      } 
      */
      this.getRoutineCategory();
      this.routineCats.splice(index, 1);
      this.toastr.success('Accion realizada');
    }, error => {
      console.log(error);
    });
  }

  createRoutineCategory() {
    let routineCat = {
      category_id: this.selCategory,
      routine_id: this.selRoutineCat
    };

    this.routineService.createRoutineCategory(routineCat)
    .subscribe(res => {
      this.toastr.success('Accion realizada');
      this.getRoutineCategory();
    }, error => {
      console.log(error);
    });
  }

  getCategories() {
    this.categoryService.getCategories()
    .subscribe((res: any[]) => {
      this.categories = res;
    }, error => {
      console.log(error);
    });
  }

  //Events
  avDaysChange() {
    this.avRoutines = this.avBaseRoutines.filter(item => {
      return item['routine_id'] == this.selAvRoutine;
    });
  }

  mapInfo(schedule) {
    this.selRoutine = schedule['routine_id'];
    this.selDay = schedule['available_day_id'];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
}
