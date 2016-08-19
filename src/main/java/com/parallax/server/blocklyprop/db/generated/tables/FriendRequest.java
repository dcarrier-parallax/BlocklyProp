/**
 * This class is generated by jOOQ
 */
package com.parallax.server.blocklyprop.db.generated.tables;


import com.parallax.server.blocklyprop.db.generated.Blocklyprop;
import com.parallax.server.blocklyprop.db.generated.Keys;
import com.parallax.server.blocklyprop.db.generated.tables.records.FriendRequestRecord;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Identity;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.UniqueKey;
import org.jooq.impl.TableImpl;


/**
 * This class is generated by jOOQ.
 */
@Generated(
	value = {
		"http://www.jooq.org",
		"jOOQ version:3.6.1"
	},
	comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class FriendRequest extends TableImpl<FriendRequestRecord> {

	private static final long serialVersionUID = 656848626;

	/**
	 * The reference instance of <code>blocklyprop.friend_request</code>
	 */
	public static final FriendRequest FRIEND_REQUEST = new FriendRequest();

	/**
	 * The class holding records for this type
	 */
	@Override
	public Class<FriendRequestRecord> getRecordType() {
		return FriendRequestRecord.class;
	}

	/**
	 * The column <code>blocklyprop.friend_request.id</code>.
	 */
	public final TableField<FriendRequestRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

	/**
	 * The column <code>blocklyprop.friend_request.idRequestUser</code>.
	 */
	public final TableField<FriendRequestRecord, Long> IDREQUESTUSER = createField("idRequestUser", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

	/**
	 * The column <code>blocklyprop.friend_request.idRequestedUser</code>.
	 */
	public final TableField<FriendRequestRecord, Long> IDREQUESTEDUSER = createField("idRequestedUser", org.jooq.impl.SQLDataType.BIGINT.nullable(false), this, "");

	/**
	 * The column <code>blocklyprop.friend_request.requested</code>.
	 */
	public final TableField<FriendRequestRecord, Timestamp> REQUESTED = createField("requested", org.jooq.impl.SQLDataType.TIMESTAMP.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>blocklyprop.friend_request.request_sent_count</code>.
	 */
	public final TableField<FriendRequestRecord, Integer> REQUEST_SENT_COUNT = createField("request_sent_count", org.jooq.impl.SQLDataType.INTEGER.nullable(false).defaulted(true), this, "");

	/**
	 * The column <code>blocklyprop.friend_request.request_last_sent</code>.
	 */
	public final TableField<FriendRequestRecord, Timestamp> REQUEST_LAST_SENT = createField("request_last_sent", org.jooq.impl.SQLDataType.TIMESTAMP.defaulted(true), this, "");

	/**
	 * The column <code>blocklyprop.friend_request.refused</code>.
	 */
	public final TableField<FriendRequestRecord, Boolean> REFUSED = createField("refused", org.jooq.impl.SQLDataType.BIT.nullable(false).defaulted(true), this, "");

	/**
	 * Create a <code>blocklyprop.friend_request</code> table reference
	 */
	public FriendRequest() {
		this("friend_request", null);
	}

	/**
	 * Create an aliased <code>blocklyprop.friend_request</code> table reference
	 */
	public FriendRequest(String alias) {
		this(alias, FRIEND_REQUEST);
	}

	private FriendRequest(String alias, Table<FriendRequestRecord> aliased) {
		this(alias, aliased, null);
	}

	private FriendRequest(String alias, Table<FriendRequestRecord> aliased, Field<?>[] parameters) {
		super(alias, Blocklyprop.BLOCKLYPROP, aliased, parameters, "");
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Identity<FriendRequestRecord, Long> getIdentity() {
		return Keys.IDENTITY_FRIEND_REQUEST;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public UniqueKey<FriendRequestRecord> getPrimaryKey() {
		return Keys.KEY_FRIEND_REQUEST_PRIMARY;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public List<UniqueKey<FriendRequestRecord>> getKeys() {
		return Arrays.<UniqueKey<FriendRequestRecord>>asList(Keys.KEY_FRIEND_REQUEST_PRIMARY, Keys.KEY_FRIEND_REQUEST_FRIEND_REQUEST_IDREQUESTUSER_IDREQUESTEDUSER_UINDEX);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public List<ForeignKey<FriendRequestRecord, ?>> getReferences() {
		return Arrays.<ForeignKey<FriendRequestRecord, ?>>asList(Keys.FRIEND_REQUEST_REQUEST_USER_ID_FK, Keys.FRIEND_REQUEST_REQUESTED_USER_ID_FK);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public FriendRequest as(String alias) {
		return new FriendRequest(alias, this);
	}

	/**
	 * Rename this table
	 */
	public FriendRequest rename(String name) {
		return new FriendRequest(name, null);
	}
}
