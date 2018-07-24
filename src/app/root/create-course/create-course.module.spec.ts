import { CreateCourseModule } from './create-course.module';

describe('CreateCourseModule', () => {
  let createCourseModule: CreateCourseModule;

  beforeEach(() => {
    createCourseModule = new CreateCourseModule();
  });

  it('should create an instance', () => {
    expect(createCourseModule).toBeTruthy();
  });
});
