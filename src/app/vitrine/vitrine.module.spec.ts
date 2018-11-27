import { VitrineModule } from './vitrine.module';

describe('VitrineModule', () => {
  let vitrineModule: VitrineModule;

  beforeEach(() => {
    vitrineModule = new VitrineModule();
  });

  it('should create an instance', () => {
    expect(vitrineModule).toBeTruthy();
  });
});
