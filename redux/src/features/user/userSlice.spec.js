import userReducer, {
  setIsIdentified,
  toggleIsIdentified,
} from './userSlice';

describe('user reducer', () => {
  const initialState = {
    isIdentified: false,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
	  isIdentified: false,
      status: 'idle',
    });
  });

  it('should handle setIsIdentified', () => {
    const actual = userReducer(initialState, setIsIdentified(true));
    expect(actual.isIdentified).toEqual(true);
  });

  it('should handle toggleIsIdentified', () => {
    const actual = userReducer(initialState, toggleIsIdentified());
    expect(actual.isIdentified).toEqual(true);
  });
});
