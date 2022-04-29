import { VoterService } from './voter.service';
import { ISession } from '../shared/models/event.model';
import { Observable, of } from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService, mockHttp: any;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      let session = { id: 6, voters: ['joe', 'jack'] };
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, <ISession>session, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('jack');
    });

    it('should call http.delete with the right URL', () => {
      let session = { id: 6, voters: ['joe', 'jack'] };
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, <ISession>session, 'joe');

      expect(mockHttp.delete).toHaveBeenCalledWith(
        '/api/events/3/sessions/6/voters/joe'
      );
    });
  });

  describe('addVoter', () => {
    it('should add the voter to the list of voters', () => {
      let session = { id: 4, voters: ['joe', 'jack'] };
      mockHttp.post.and.returnValue(of(false));

      voterService.addVoter(57, <ISession>session, 'jill');

      expect(session.voters.length).toBe(3);
      expect(session.voters[2]).toBe('jill');
      expect(mockHttp.post).toHaveBeenCalledWith(
        '/api/events/57/sessions/4/voters/jill', {}, jasmine.any(Object)
      );
    });
  });
});
